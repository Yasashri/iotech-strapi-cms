export default {
  async bootstrap({ strapi }) {
    const localesService = strapi.plugin("i18n").service("locales");

    const existing = await localesService.find();
    const codes = existing.map((l) => l.code);

    const requiredLocales = [
      { code: "en", name: "English" },
      { code: "ar", name: "Arabic" }
    ];

    for (const loc of requiredLocales) {
      if (!codes.includes(loc.code)) {
        await localesService.create(loc);
      }
    }
  }
};
