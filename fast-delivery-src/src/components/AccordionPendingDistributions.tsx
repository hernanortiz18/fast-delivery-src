import React, { MouseEventHandler, useEffect, useState } from "react";
import "@/styles/homeDelivery.css";
import "@/styles/input.css";
import "@/styles/buttons.css";
import TrashIcon from "@/assets/TrashIcon";
import AccordionPackageItem from "./AccordionPackageItem";
import ArrowIcon from "@/assets/ArrowIcon";
import { changeStatus, getPackagesByDriver } from "@/services/dataPackages";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PackageProps } from "../../types";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

type AccordionPendingDistributionsProps = {
  onClick: () => void;
};

function AccordionPendingDistributions({
  onClick,
}: AccordionPendingDistributionsProps) {
  const [openSection, setOpenSection] = useState(0);
  const [packages, setPackages] = useState<PackageProps[]>([]);

  const user = useAppSelector((state) => state.user);
  const router = useRouter();

  const handleClick = () => {
    setOpenSection(openSection === 1 ? 0 : 1);
    onClick();
  };

  useEffect(() => {
    getPackagesByDriver(user.id)
      .then((packages) => {
        const pending = packages.filter(
          (pendingPackage: PackageProps) => pendingPackage.status === "Pending"
        );
        const onCourse = packages.filter(
          (onCoursePackage: PackageProps) =>
            onCoursePackage.status === "On Course"
        );

        const combinedPackages = pending.concat(onCourse);
        setPackages(combinedPackages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleInitDeliver: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    try {
      toast.success("Ya puede ir a repartir su paquete.");
      const button = e.target as HTMLButtonElement;
      setTimeout(() => {
        changeStatus(button.id, "On Course");
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error(`Error al iniciar el reparto del paquete`, error);
      setTimeout(() => {
        toast.error("¡Lo siento! No puede ir a repartir su paquete.");
      }, 2000);
    }
  };

  const handleDeletePackage: React.MouseEventHandler<SVGSVGElement> = async (
    e
  ) => {
    try {
      toast.info("Paquete eliminado correctamente");
      const button = e.target as HTMLButtonElement;
      setTimeout(() => {
        changeStatus(button.id, "Free");
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error(`Error al eliminar el paquete`, error);
      setTimeout(() => {
        toast.error("Error al eliminar el paquete");
      }, 2000);
    }
  };
  return (
    <div className="accordion-box-top">
      <div className="box-title" onClick={handleClick}>
        <h1>Repartos Pendientes</h1>
        <ArrowIcon />
      </div>

      {(openSection === 1 || openSection === 3) && (
        <>
          {packages.length === 0 ? (
            <h3
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Lo siento, no se han encontrado paquetes.
            </h3>
          ) : (
            ""
          )}
          <ul>
            {packages.map((individualPackage, index) => (
              <AccordionPackageItem
                onClick={() =>
                  router.push(`/delivery-map/${individualPackage.id}`)
                }
                key={index}
                id={individualPackage.id}
                address={individualPackage.address}
                city={individualPackage.city}
                tags={
                  individualPackage.status === "On Course"
                    ? "course"
                    : "pending"
                }
                tagContent={
                  individualPackage.status === "On Course"
                    ? "En curso"
                    : "Pendiente"
                }
                additionalElement={
                  individualPackage.status === "On Course" ? (
                    <TrashIcon
                      style={{ cursor: "pointer" }}
                      onClick={handleDeletePackage}
                    />
                  ) : (
                    <button
                      className="greenButtonSmall"
                      onClick={handleInitDeliver}
                      id={individualPackage.id}
                    >
                      iniciar
                    </button>
                  )
                }
              />
            ))}
            <ToastContainer
              position="top-right"
              transition={Zoom}
              autoClose={2000}
            />
          </ul>
        </>
      )}
    </div>
  );
}

export default AccordionPendingDistributions;
