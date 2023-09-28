import { Props } from "./Elem";
import { Content } from "./Content";

import { Box } from "grommet";

export const Item = ({ children = <Content /> }: Partial<Props>) => {
  return (
    <>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 ">
        {children}
        <Box
          animation={[
            { delay: 2500, type: "fadeIn" },
            { duration: 2500, type: "pulse" },
          ]}
        >
          <a href="/https://sleekflow.io/channels/whatsapp-business-api?utm_term=whatsapp%20api%20provider&utm_campaign=17533911355&utm_source=google&utm_medium=cpc&utm_content=604869155703&hsa_acc=2776750266&hsa_cam=17533911355&hsa_grp=143623063371&hsa_ad=604869155703&hsa_src=g&hsa_tgt=kwd-545208367613&hsa_kw=whatsapp%20api%20provider&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad=1&gclid=CjwKCAjwsKqoBhBPEiwALrrqiDNGUpn8zMbDRlSqz6Qp0NoN21nChRFt_UIi3V66gr7GTLCAgL4X6hoC6KUQAvD_BwEp">
            <img
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "35px",
                height: 150,
              }}
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/5gm6zom74fa-1%3A2?alt=media&token=aebb2a8b-e0dd-48fe-acc2-03c8039c9e3b"
              alt=""
            />
          </a>
        </Box>
      </div>
    </>
  );
};
