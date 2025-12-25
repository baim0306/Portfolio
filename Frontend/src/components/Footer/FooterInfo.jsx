import ListContacts from "../ListContacts";

export default function FooterInfo() {
  return (
    <div className="footer-info w-full z-10 flex flex-col gap-4 relative z-10">
      <p className="text-sm text-slate-800 font-google-sans p-4">
        <span className="text-xs text-slate-500">
          Based in Lampung, Indonesia
        </span>{" "}
        <br />
        Terima kasih sudah mampir 👋 <br />
        Ngoding hari ini, belajar setiap hari.
      </p>
      <ListContacts
        title="Tetap Terhubung Melalui : "
        size="lg"
        color="slate-300"
        shadow="slate-800"
      />
    </div>
  );
}
