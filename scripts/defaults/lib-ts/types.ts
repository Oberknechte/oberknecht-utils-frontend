export const defaultExitIconURL = "https://raw.githubusercontent.com/Oberknechte/oberknecht-utils-frontend/main/img/x-red-48x48.png" as const;

export const defaultCopyAnimationDuration = 5000 as const;

export const defaultNotificationAnimationDuration = 5000 as const;
export const defaultNotificationErrorAnimationDuration = -1 as const;

export type elementOptionsExtra = {
  classes?: string | string[];
  childNodes?: string | string[];
};

export type elementOptions = elementOptionsExtra & Record<string, any>;

export type version = {
  npm: string;
};

export type jPopoutType = HTMLElement & {
  closePopout: () => {};
};

export type elemType = HTMLElement | Element;

export type getElementType = elemType | string;

export type functionsSettingsType = {
  iconSize?: number | 48;
  popoutOptions?: popoutOptionsType;
  copyOptions?: copyOptionsType;
  notificationOptions?: notificationOptionsType;
};

export type popoutOptionsType = {
  title?: string;
  innerElems?: elemType | elemType[];
  parentElem?: HTMLElement;
  exitIconURL?: string;
  parentOptions?: elementOptions;
  reuseOpenedPopout?: boolean;
  zIndex?: number;
  noRemoveAfterClose?: boolean;
  onClose?: Function;
  onClosed?: Function;
};

export type copyOptionsType = {
  withoutAnimation?: boolean;
  customDataAttributeKey?: string;
  animationParentsNum?: number;
  animationDuration?: number | typeof defaultCopyAnimationDuration;
};

export type jNotificationType = jPopoutType;

export type notificationOptionsType = {
  exitIconURL?: string;
  isError?: boolean;
  parentElem?: elemType;
  zIndex?: number;
  reuseOpenedNotification?: boolean;
  animationDuration?: number | typeof defaultNotificationAnimationDuration;
  animationDurationError?:
    | number
    | typeof defaultNotificationErrorAnimationDuration;
  notificationButtons?: HTMLElement | HTMLElement[];
  noRemoveAfterClose?: boolean;
  noRemoveContainerAfterClose?: boolean;
  elementOptions?: elementOptions
};
