
type HeaderProps = {
    title: string;
    subtitle?: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
    return (
        <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-center py-2 bg-gradient-to-r bg-neutral-300 to-neutral-500 text-transparent bg-clip-text">
                {title}
            </h1>
            <h3 className="text-sm text-center text-neutral-700 dark:text-neutral-400">
                {subtitle}
            </h3>
        </div>
    );
}
