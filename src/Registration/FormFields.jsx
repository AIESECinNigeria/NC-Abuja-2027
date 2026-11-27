import React, { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';

export const DROPDOWN_ICON_SRC = '/images/Arrow.svg';

const fieldBoxBase = 'w-full border px-[16px] py-[16px] lg:px-[calc(16_*_var(--k,1px))] lg:py-[calc(16_*_var(--k,1px))] backdrop-blur-sm text-left transition-colors';

export const fieldBox = `${fieldBoxBase} border-white/20`;
export const fieldLabel =
  'block font-baserona text-[13px] sm:text-[15px] lg:text-[length:calc(20_*_var(--k,1px))] font-normal tracking-wide uppercase leading-tight lg:leading-none';
export const fieldInput = 'block w-full bg-transparent outline-none font-artegraLight text-[12px] sm:text-[14px] lg:text-[length:calc(19_*_var(--k,1px))] lg:h-[calc(24_*_var(--k,1px))] tracking-wide placeholder:text-white/55 text-white uppercase'

function SafeText({ children }) {
  const parts = String(children ?? '').split(/([^A-Za-z0-9 ]+)/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} style={{ fontFamily: 'Arial, sans-serif' }}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

function boxState({ filled, invalid, variant, shake = '' }) {
  const border = invalid
    ? 'border-[#EC0303]'
    : filled
    ? 'border-white/50'
    : variant === 'light'
    ? 'border-white/30'
    : 'border-white/20';

  const bg = filled
    ? 'bg-white/20'
    : variant === 'light'
    ? 'bg-white/15'
    : 'bg-[#3D0909]/95';

  const line = filled ? 'border-white' : 'border-white/50';

  const focus = 'focus-within:bg-white/20 focus-within:border-white/50';

  return { box: `${fieldBoxBase} ${border} ${bg} ${focus} ${shake}`, line };
}

export function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p
      id={id}
      role="alert"
      className="error-in mt-[6px] text-[14px] font-medium leading-tight text-[#EC0303] lg:mt-[calc(8_*_var(--k,1px))] lg:text-[length:calc(18_*_var(--k,1px))]"
    >
      {message}
    </p>
  );
}

export function TextField({
  label,
  name,
  register,
  rules,
  placeholder,
  type = 'text',
  inputMode,
  autoComplete,
  inputClassName = '',
  filled,
  invalid,
  errorId,
  shake = '',
  variant = 'red',
}) {
  const { box, line } = boxState({ filled, invalid, variant, shake });

 return (
  <div className={box}>
    <label htmlFor={name} className={fieldLabel}>
      {label}
    </label>
    <div
      className={`mt-[8px] border-b pb-[8px] lg:mt-[calc(18_*_var(--k,1px))] lg:pb-[calc(9_*_var(--k,1px))] ${line}`}
    >
      <input
        id={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? errorId : undefined}
        {...register(name, rules)}
        className={`${fieldInput} ${inputClassName}`}
      />
    </div>
  </div>
);
}

export function DropdownField({
  label,
  name,
  control,
  rules,
  options = [],
  placeholder = 'SELECT ONE',
  iconSrc = DROPDOWN_ICON_SRC,
  filled,
  invalid,
  shake = '',
  variant = 'red',
}) {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const { box, line } = boxState({ filled, invalid, variant, shake });

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <div
          ref={boxRef}
          className={`${box} cursor-pointer`}
          onClick={() => setOpen((o) => !o)}
        >
          <label className={fieldLabel}>{label}</label>

          <div
            className={`relative border-b ${
              open
                ? 'mt-[3px] pb-[8px] lg:mt-[calc(10_*_var(--k,1px))] lg:pb-[calc(8_*_var(--k,1px))]'
                : 'mt-[11px] pb-[7px] lg:mt-[calc(18_*_var(--k,1px))] lg:pb-[calc(9_*_var(--k,1px))]'
            } ${line}`}
          >
            {open ? (
              <div
                role="listbox"
                onClick={(e) => e.stopPropagation()}
                // long lists scroll inside the field instead of stretching the page
                className="drop-in -mx-[8px] max-h-[180px] overflow-y-auto overscroll-contain [scrollbar-color:rgba(255,255,255,0.4)_transparent] [scrollbar-width:thin] lg:-mx-[calc(8_*_var(--k,1px))] lg:max-h-[calc(180_*_var(--k,1px))]"
              >
                {options.map((opt) => (
                  <div
                    key={opt}
                    role="option"
                    aria-selected={field.value === opt}
                    onClick={(e) => {
                      e.stopPropagation();
                      field.onChange(opt);
                      setOpen(false);
                    }}
                    className={`flex h-[40px] cursor-pointer items-center px-[8px] font-artegraLight text-[13px] uppercase tracking-wide transition-colors hover:bg-white/15 lg:h-[calc(40_*_var(--k,1px))] lg:px-[calc(8_*_var(--k,1px))] lg:text-[length:calc(19_*_var(--k,1px))] ${
                      field.value === opt ? 'text-white' : 'text-white/60'
                    }`}
                  >
                    <SafeText>{opt}</SafeText>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-[24px] items-center justify-between lg:h-[calc(24_*_var(--k,1px))]">
                <span
                  className={`font-artegraLight text-[13px] lg:text-[length:calc(19_*_var(--k,1px))] uppercase tracking-wide ${
                    field.value ? 'text-white' : 'text-white/55'
                  }`}
                >
                  <SafeText>{field.value || placeholder}</SafeText>
                </span>
              </div>
            )}

            <div
              aria-hidden
              className={`pointer-events-none absolute top-0 flex items-center ${
                open
                  ? 'right-[8px] h-[40px] lg:right-[calc(8_*_var(--k,1px))] lg:h-[calc(40_*_var(--k,1px))]'
                  : 'right-0 h-[24px] lg:h-[calc(24_*_var(--k,1px))]'
              }`}
            >
              <img
                src={iconSrc}
                alt=""
                className={`h-auto w-[20px] shrink-0 object-contain transition-transform duration-200 ease-out lg:w-[calc(20_*_var(--k,1px))] ${
                  open ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>
          </div>
        </div>
      )}
    />
  );
}