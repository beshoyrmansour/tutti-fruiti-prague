import type { LinksFunction, MetaFunction } from "@vercel/remix";
import logo from "~/assets/logo.svg";
export const meta: MetaFunction = () => {
  return [
    { title: "Tutti Fruiti Prague" },
    { name: "description", content: "Welcome to tutti fruiti prague!" },
  ];
};

export default function Index() {
  return (

    <div
      className="flex flex-col justify-center items-center gap-12 h-full p-16 bg-gradient-to-r from-slate-950 to-indigo-900"
      style={{
        fontFamily: "system-ui, sans-serif", lineHeight: "1.8",
      }}>
      <img src={logo} alt="logo" style={{ maxWidth: '800px' }} />
      <h1 style={{
        color: 'white',
        fontSize: '5rem',
        fontFamily: 'bayshore'
      }}>Coming soon ...</h1>
    </ div>
  );
}
