import React from 'react'

import InformationDisclosureTab from '../InformationDisclosureTab/InformationDisclosureTab.js'
// import DocumentsTab from '../DocumentsTab'
// import DistributionKitTab from '../DistributionKitTab'
// import FAQTab from '../FAQTab'
// import VacanciesTab from '../VacanciesTab'
// import PartnersTab from '../PartnersTab'
// import NewsTab from '../NewsTab'
// import ProfilesTab from '../ProfilesTab'

const CustomTabsPanels = ({ selectedTabNumber }) => {
  switch (selectedTabNumber) {
    case 0:
      return <InformationDisclosureTab />
    case 1:
      return <div>2</div>
      // <DocumentsTab />
    case 2:
      return <div>3</div>
      // <DistributionKitTab />
    case 3:
      return <div>4</div>
      // <FAQTab />
    case 4:
      return <div>5</div>
      // <VacanciesTab />
    case 5:
      return <div>6</div>
      // <PartnersTab />
    case 6:
      return <div>7</div>
      // <NewsTab />
    case 7:
      return <div>8</div>
      // <ProfilesTab />
    default:
      return <div>9</div>
      // <InformationDisclosureTab />
  }
}

export default CustomTabsPanels
