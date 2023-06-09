import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        fontSize: "40px",
        lineHeight: "1.8",
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "center",
        paddingTop: "50px",
        height: "100vh",
      }}
    >
      <h1>HELLO GALOS</h1>
    </div>
  );
}
