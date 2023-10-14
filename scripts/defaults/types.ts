export type elementOptionsExtra = {
  classes?: string | string[];
  childNodes?: string | string[];
};

export type elementOptions = elementOptionsExtra & Record<string, any>;
