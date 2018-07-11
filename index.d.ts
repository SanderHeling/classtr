declare function classtr(cls: Array<classtr.BoolType>): string;

declare namespace classtr {
    type BoolType = string | boolean | null | undefined;
}

export = classtr;
