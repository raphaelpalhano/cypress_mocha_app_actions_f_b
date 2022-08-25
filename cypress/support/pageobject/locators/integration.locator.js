export default {
  TYPEKEY: (type) =>
    cy.xpath(`//span[contains(text(), "Tipo de chave")]/ancestor::div[@class="flex flex-wrap gap-6"]/descendant::ul/descendant::li[contains(text(), "${type}")]`),
};
