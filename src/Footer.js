function Footer(){
    const footerMenu = ['contacts', 'address', 'Facebook', 'Privacy policy', 'Delivery' ];
    return(
      <ul>
          <li>{footerMenu[0]}</li>
          <li>{footerMenu[1]}</li>
          <li>{footerMenu[2]}</li>
          <li>{footerMenu[3]}</li>
          <li>{footerMenu[4]}</li>
      </ul>
    );
}
export default Footer;