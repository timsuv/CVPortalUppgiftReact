
const Contact = () => {
  return (
    <>
     <section id="contact">
      <div className="contactTitle">
        <h2><span>Contact me</span></h2>
      </div>

      <div className="contactBox">
        <div className="myInfo">
          <div className="info">
            <span><i className="bx bx-phone"></i></span>
            <h3>Phone</h3>
            <p><a href="tel:0761772149">076-177-21-49</a></p>
          </div>
          <div className="info">
            <span><i className="bx bx-map"></i></span>
            <h3>Location</h3>
            <p>Stockholm, Sweden</p>
          </div>
          <div className="info">
            <span><i className="bx bx-envelope"></i></span>
            <h3>Email</h3>
            <p>
              <a href="mailto:timsuvorov@icloud.com">timsuvorov@icloud.com</a>
            </p>
            <div className="socialMedia">
              <a href="https://linkedin.com/in/timofey-suvorov-99a35a224" target="_blank">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://github.com/timsuv" target="_blank">
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form className="form" id="form">
            <div className="form-group">
              <label htmlFor="email">Company Email</label>
              <input type="text" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input type="text" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="textarea">Leave a message</label>
              <textarea
                name="textarea"
                id="textarea"
                rows = {10}
                cols={50}
                required
              ></textarea>
            </div>
            <button className="form-submit-btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
