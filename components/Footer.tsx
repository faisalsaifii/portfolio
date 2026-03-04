const Footer = () => (
  <footer className="py-8 border-t border-border/50">
    <div className="container mx-auto px-6 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()}{" "}
        <span className="text-gradient font-semibold">Faisal</span>. Crafted
        with passion.
      </p>
    </div>
  </footer>
);

export default Footer;
