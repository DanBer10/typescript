import { ReactElement } from "react";

export interface HeadingProps {
  title: string;
}

export const Heading = ({ title }: HeadingProps) => {
  return <h3>{title}</h3>;
};

export type ListComponent = <ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactElement;
}) => ReactElement;

export const List: ListComponent = ({ items, render }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

const TestComponent = () => {
  return (
    <>
      <Heading title="hello" />
      <List items={["a", "b", "c"]} render={(str) => <strong>{str}</strong>} />
    </>
  );
};

export default TestComponent;
