# fast-delivery-src

## Last Mile Logistics - Delivery Management Application

# Project Description

This repository contains the source code and necessary resources to develop a web application dedicated to last-mile logistics management. The primary goal of the application is to enable a logistics company to supervise and manage the daily operations of its delivery personnel, as well as the assignment and reassignment of packages.

# Key Features

Delivery Personnel Application
Delivery personnel will have access to an application where they can register and log in freely. Once authenticated, they can perform the following actions:

# Package Selection: Delivery personnel can choose up to a maximum of 10 packages to be delivered throughout their working day.

Pending Deliveries View: View details of assigned packages and associated delivery addresses.
Address Editing: If necessary, delivery personnel can edit the delivery address of a package before making the delivery.
Administrator Application
The application for administrators allows the company to have complete control over logistics operations. Administrators can perform the following actions:

# Personnel Management: View the list of registered delivery personnel and activate or deactivate their accounts.

Real-time Tracking: Monitor the number of active delivery personnel with ongoing deliveries at any given time.
Package Control: Create, view, and edit packages to be sent, as well as assign or reassign packages to specific delivery personnel.
Delivery Intervention: Administrators can intervene if necessary to edit a shipment, modify the delivery address, or reassign the shipment to another delivery personnel.

## Folders

src: Folder housing the front-end application's source code.
app: Routes within Next.js.
assets: Images and other static files.
components: Components with logic or elements specific to a view that you won't reuse.
commons: Reusable components.
hooks: Custom Hooks.
style: Custom styles for the application.
utils: Generic functions.

## Branches

main: The stable and production-ready version of the project. Changes to this branch undergo thorough review and testing to ensure the reliability and stability of the software in live environments.

developer: Where new features, bug fixes, and improvements are integrated and tested before merging into the main branch. It serves as a collaborative environment for ongoing development and may be less stable than the main branch.
