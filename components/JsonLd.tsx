type SchemaInput = Record<string, unknown> | (() => Record<string, unknown>);

type JsonLdProps = {
  schemas: SchemaInput | Array<SchemaInput>;
};

const JsonLd = ({ schemas }: JsonLdProps) => {
  const items = Array.isArray(schemas) ? schemas : [schemas];
  const resolved = items.map((item) =>
    typeof item === "function" ? item() : item
  );

  return (
    <>
      {resolved.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
};

export default JsonLd;
