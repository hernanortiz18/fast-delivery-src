import React from 'react'
import "@/styles/homeDelivery.css"
import "@/styles/buttons.css"
import BoxIcon from '@/assets/BoxIcon';

type PackageItemProps = {
  packageCode: string;
  packageDirection: string;
  tags: string;
  tagContent: string
  additionalElement?: React.ReactNode;
};


function AccordionPackageItem({ packageCode, packageDirection, tags,  additionalElement, tagContent }: PackageItemProps) {
  return (
    <div className="package-item">
    <div className="box-icon-info-container">
      <BoxIcon />
      <div>
        <h1 className="package-code">{packageCode}</h1>
        <h2 className="package-direction" dangerouslySetInnerHTML={{ __html: packageDirection }} />
      </div>
    </div>
    <div className="tags-container">
      <p className={`tags ${tags}`}>{tagContent}</p>
      {additionalElement && <div className="aditional-element">{additionalElement}</div>}
    </div>
  </div>
  )
}

export default AccordionPackageItem