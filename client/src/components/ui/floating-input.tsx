import * as React from "react";
import { cn } from "@/lib/utils";

export interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  as?: "input" | "textarea";
  rows?: number;
}

const FloatingInput = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, FloatingInputProps>(
  ({ className, type = "text", placeholder, as = "input", rows, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    React.useEffect(() => {
      if (props.value) {
        setHasValue(String(props.value).length > 0);
      }
    }, [props.value]);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value !== "");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setHasValue(e.target.value !== "");
      if (props.onChange) {
        props.onChange(e as any);
      }
    };

    const baseClasses = "w-full px-4 py-4 bg-surface border border-gray-600 rounded-xl focus:border-android-blue focus:outline-none transition-colors peer";

    if (as === "textarea") {
      return (
        <div className="relative">
          <textarea
            className={cn(baseClasses, className)}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            rows={rows}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
          <label
            className={cn(
              "absolute left-4 top-4 text-secondary pointer-events-none transition-all duration-300 transform origin-left",
              (isFocused || hasValue) && "transform -translate-y-6 -translate-x-1 scale-75 text-android-blue bg-surface px-1"
            )}
          >
            {placeholder}
          </label>
        </div>
      );
    }

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(baseClasses, className)}
          ref={ref as React.Ref<HTMLInputElement>}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
        <label
          className={cn(
            "absolute left-4 top-4 text-secondary pointer-events-none transition-all duration-300 transform origin-left",
            (isFocused || hasValue) && "transform -translate-y-6 -translate-x-1 scale-75 text-android-blue bg-surface px-1"
          )}
        >
          {placeholder}
        </label>
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";

export default FloatingInput;
