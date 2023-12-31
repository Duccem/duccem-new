'use client'
import { PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";
import { theme } from "ui";
import { getRepositories } from '../../../config/Repositories';
import messages_en from '../../../locales/en.json';
import messages_es from '../../../locales/es.json';
import { ErrorHandler } from "../components/ErrorHandler";
import { Loader } from "../components/Loader";
import { DucenContextProvider } from "./DucenContext";
export function DucenProvider({ children, configurations }: PropsWithChildren<{ configurations: any }>) {
  const messages = {
    es: messages_es,
    en: messages_en
  }
  return (
    <>
      <DucenContextProvider {...getRepositories(configurations)} configurations={configurations}>
        <ThemeProvider theme={theme} >
            <IntlProvider locale='es' messages={messages['es']}>
              <Loader/>
              <ErrorHandler />
              {children}
            </IntlProvider>
          </ThemeProvider>
      </DucenContextProvider>
    </>
  )
}
