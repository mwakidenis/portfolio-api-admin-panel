import { useRecordContext } from "react-admin";

const TagsField = () => {
  const record = useRecordContext();
  return (
    <ul
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 0,
      }}
    >
      {record?.tags.map((tag: string) => (
        <li
          key={tag}
          style={{
            background: "#eab330",
            color: "#000",
            width: "150px",
            textAlign: "center",
            padding: "4px 8px",
            borderRadius: "5px",
            fontSize: "0.875rem",
          }}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagsField;
