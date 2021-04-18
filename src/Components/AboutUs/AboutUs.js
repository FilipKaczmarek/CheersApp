const aboutUsFragment = document.createDocumentFragment();

const header = 'About Us:'
const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et turpis ornare, elementum massa in, condimentum arcu. Vivamus non dictum turpis. Curabitur purus nulla, tincidunt ut mollis non, ornare id risus. Sed eget quam velit. Vestibulum vel augue eget velit placerat tincidunt ac ac odio. Pellentesque iaculis nulla leo, sed viverra est scelerisque ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam et est non massa congue eleifend ac vel urna. Aliquam leo libero, scelerisque ac dui congue, semper ullamcorper leo. Nunc nibh nibh, dictum non turpis eget, rhoncus malesuada sapien. Maecenas consequat purus id velit feugiat, non dapibus ante blandit. Nulla sit amet venenatis elit.`

const container = document.createElement('div');
container.className = "aboutUs--section";

const sectionHeader = document.createElement('h1');
sectionHeader.className = "aboutUs--header";
sectionHeader.innerHTML = header;

const sectionContent = document.createElement('p');
sectionContent.className = "aboutUs--content";
sectionContent.innerHTML = content;


container.appendChild(sectionHeader);
container.appendChild(sectionContent);
const aboutUsSection = aboutUsFragment.appendChild(container);

export default aboutUsSection