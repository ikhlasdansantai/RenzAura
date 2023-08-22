export default function Title({ children }: { children: string }): JSX.Element {
  return <h2 className={`text-3xl md:text-4xl dark:text-white`}>{children}</h2>;
}
