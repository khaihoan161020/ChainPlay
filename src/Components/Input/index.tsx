interface InputProps {
    type: 'text' | 'password' | 'email' | 'number'
    placeholder?: string
    disabled?: boolean
    label?: string
    icon?: any
    error?: Array<string>
    value?: any
    className?: string
    onChange?: (value: any) => void
}
const Input = ({ value, type, placeholder, disabled = false, label, icon, error, className, onChange }: InputProps) => {
    return (
        <div className={`${className}`}>
            {label && <label className='dark:text-true-gray ml-5 text-sm'>{label}</label>}
            <div
                className={`flex items-center px-4 rounded-full transition-all relative bg-[#F1F5F9] dark:bg-[#262626] dark:text-white-gray
                        ${
                            error && error.length > 0
                                ? 'border-red-400 border-solid border-[2px] dark:border-red-400 shadow shadow-red-300'
                                : 'border-none hover:border-sky-blue/50 dark:hover:border-sky-blue/50 dark:border-slate-700 '
                        }
                        `}
            >
                {icon}
                <input
                    className='w-full bg-[rgba(255,255,255,0)] disabled:opacity-60 disabled:cursor-not-allowed bg-opacity-0 px-2 py-2 dark:text-gray focus:outline-none placeholder:text-sm'
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    autoComplete='new-password'
                    disabled={disabled}
                />
            </div>
            {error &&
                error.length > 0 &&
                error.map((err: string, index: number) => (
                    <p key={index} className='text-sm text-red-400'>
                        {err}
                    </p>
                ))}
        </div>
    )
}

export default Input
