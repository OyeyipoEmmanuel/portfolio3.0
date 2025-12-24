import { ReactNode } from "react"

type ButttonProps = {
    children: ReactNode
    className: string
    onClick?: () => void
}

const Button = ({ className, onClick, children }: ButttonProps) => {
    return (
        <div className="bgImg rounded-md">
            <button className={`${className} flex items-center justify-center rounded-md cursor-pointer`} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button