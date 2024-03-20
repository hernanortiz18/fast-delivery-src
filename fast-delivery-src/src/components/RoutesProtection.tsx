"use client";
import { setUser } from "@/redux/features/user";
import { useAppSelector } from "@/redux/hooks";
import { checkAuth } from "@/services/dataLogin";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const RoutesProtection = ({ children }: { children: React.ReactNode }) => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    checkAuth()
      .then((response) => {
        if (response) {
          dispatch(setUser(response));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return <>{children}</>;
};

export default RoutesProtection;
