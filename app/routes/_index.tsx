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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
      height: '100%',
      padding: 16,
      fontFamily: "system-ui, sans-serif", lineHeight: "1.8",
      background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
    }}>
      <img src={logo} alt="logo" style={{ maxWidth: '800px' }} />
      <h1 style={{
        color: 'white',
        fontSize: '5rem',
        fontWeight: 'lighter',
      }}>Coming soon ...</h1>
    </ div>
  );
}
