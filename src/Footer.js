function Footer(){
    const footerMenu = ['contacts', 'address', 'Facebook',
        'Privacy policy', 'Delivery' ];
    return(
      <ul>
          {footerMenu.map(el=><li>{el}</li>)}
      </ul>
    );
}
export default Footer;