export default {
  TYPEKEY: (typeFile) => cy.xpath(`//div[contains(text(), "${typeFile}")]/descendant::input[@type="file"]`),
  QUALIFICATION: () => cy.get('button[data-testid="select-legal-entity-role"]'),
  ROLEQUALIFICATION: (role) => cy.xpath(`//div//ul[@role="listbox"]/descendant::li[contains(text(), "${role}")]`),
};
