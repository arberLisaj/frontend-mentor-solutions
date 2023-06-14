import axios from "axios";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const schema = z.object({
  url: z.string().min(5).max(30),
});

const LinkInput = () => {
  const [data, setData] = useState();
  const [url, setUrl] = useState("github.com/arberlisaj");
  // setUrl("arberlisaj.com");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${url}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, [url]);

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    // removing spaces from the url
    let url = data.url.replace(/\s/g, "");
    setUrl(url);
  };

  // copying and saving the output
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(displayURL);
    setIsCopied(true);
  };
  const [hideCopyLink, setHideLink] = useState(true);
  const displayURL = data ? data.result.short_link : "";
  return (
    <section id="link-container">
      <section id="link">
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <input
            {...register("url")}
            type="text"
            placeholder="Enter a url ..."
          />
          <button onClick={() => setHideLink(false)}>Shorten</button>
        </form>
      </section>
      <div className={hideCopyLink ? "hide copy" : "show copy"}>
        <input type="text" id="copy" value={displayURL} readOnly />
        <button className={isCopied ? "copied" : "regular"} onClick={handleCopy}>
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </section>
  );
};
export default LinkInput;
