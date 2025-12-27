export default function ListContacts({
  title = "Hubungi Saya",
  size = "lg",
  color = "green-400",
  shadow = "green-700",
}) {
  return (
    <div className="p-2">
      <h3
        className={`text-${color} text-${size} text-shadow-md text-shadow-${shadow} font-bold font-google-sans p-2`}
      >
        {title}
      </h3>
      <ul className="flex space-x-4 p-2">
        <li
          key="wa"
          style={{
            backgroundImage: `url(wa.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="rounded-full w-10 aspect-square cursor-pointer hover:scale-125 trasition duration-300 ease-in-out shadow-md shadow-green-700"
        ></li>
        <li
          key="ig"
          style={{
            backgroundImage: `url(ig.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="rounded-full w-10 aspect-square cursor-pointer hover:scale-125 trasition duration-300 ease-in-out shadow-md shadow-green-700"
        ></li>
        <li
          key="email"
          style={{
            backgroundImage: `url(email.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="rounded-full w-10 aspect-square cursor-pointer hover:scale-125 trasition duration-300 ease-in-out shadow-md shadow-green-700"
        ></li>
        <li
          key="line"
          style={{
            backgroundImage: `url(line.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="rounded-full w-10 aspect-square cursor-pointer hover:scale-125 trasition duration-300 ease-in-out shadow-md shadow-green-700"
        ></li>
        <li
          key="linkedin"
          style={{
            backgroundImage: `url(linkedin.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="rounded-full w-10 aspect-square cursor-pointer hover:scale-125 trasition duration-300 ease-in-out shadow-md shadow-green-700"
        ></li>
      </ul>
    </div>
  );
}
