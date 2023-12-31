import { defaultAppStates } from "@/app/constants/defaultValues";
import { Dispatch, SetStateAction } from "react";

interface projectProps {
  setProjectGuide: Dispatch<SetStateAction<boolean>>;
  setResumeGuide: Dispatch<SetStateAction<boolean>>;
  setHighlightedApp: Dispatch<SetStateAction<Record<string, boolean>>>;
  setMaximizedStates: Dispatch<React.SetStateAction<Record<string, boolean>>>;
}
interface startProps {
  setStartOpen: Dispatch<SetStateAction<boolean>>;
  setContact: Dispatch<SetStateAction<boolean>>;
  setHighlightedApp: Dispatch<SetStateAction<Record<string, boolean>>>;
  setProjectGuide: Dispatch<SetStateAction<boolean>>;
  setResumeGuide: Dispatch<SetStateAction<boolean>>;
  setMaximizedStates: Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

const projectPopUp = ({
  setProjectGuide,
  setResumeGuide,
  setHighlightedApp,
  setMaximizedStates,
}: projectProps) => {
  setMaximizedStates((prevState) => ({
    ...prevState,
    ["Welcome Guide"]: false,
  }));

  setResumeGuide(false);
  setProjectGuide(true);

  const appName = "Project: Condensed News";
  setHighlightedApp((prevState) => ({
    ...prevState,
    [appName]: true,
  }));
};

const resumePopUp = ({
  setProjectGuide,
  setResumeGuide,
  setHighlightedApp,
  setMaximizedStates,
}: projectProps) => {
  setMaximizedStates((prevState) => ({
    ...prevState,
    ["Welcome Guide"]: false,
  }));

  setProjectGuide(false);
  setResumeGuide(true);

  const appName = "Resume";
  setHighlightedApp((prevState) => ({
    ...prevState,
    [appName]: true,
  }));
};

const startPopUp = ({
  setStartOpen,
  setContact,
  setHighlightedApp,
  setProjectGuide,
  setResumeGuide,
  setMaximizedStates,
}: startProps) => {
  setMaximizedStates((prevState) => ({
    ...prevState,
    ["Welcome Guide"]: false,
  }));

  setHighlightedApp(defaultAppStates);
  setContact(false);
  setProjectGuide(false);
  setResumeGuide(false);
  setStartOpen(true);
};

const contactPopUp = ({
  setStartOpen,
  setContact,
  setHighlightedApp,
  setProjectGuide,
  setResumeGuide,
  setMaximizedStates,
}: startProps) => {
  setMaximizedStates((prevState) => ({
    ...prevState,
    ["Welcome Guide"]: false,
  }));

  setHighlightedApp(defaultAppStates);
  setContact(true);
  setProjectGuide(false);
  setResumeGuide(false);
  setStartOpen(true);
};

export { projectPopUp, resumePopUp, startPopUp, contactPopUp };
