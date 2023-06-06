import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect } from "react";

function NewsletterSignup() {
  const { data, Form, state } = useFetcher();
  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [state, data]);

  return (
    <div className={classes.newsletter_container}>
      <h1 className="title_font_size ">STAY UPDATED</h1>
      <p className="common_font_size">
        Subscribe to our newsletter to get our latest news.
      </p>
      <Form
        action="/newsletter"
        method="post"
        className={`common_font_size ${classes.newsletter}`}
      >
        <input
          type="email"
          placeholder="Sign up for newsletter..."
          aria-label="Sign up for newsletter"
        />
        <button>Sign up</button>
      </Form>
    </div>
  );
}

export default NewsletterSignup;
