export namespace cap.bookshop.typescript {
    export interface IBook {
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        ID: number;
        title: string;
        descr: string;
        author?: IAuthor;
        author_ID?: number;
        genre?: IGenre;
        genre_ID?: number;
        stock: number;
        price: number;
        currency: sap.common.ICurrencies;
        currency_code?: string;
        texts: ITexts[];
        localized?: ITexts;
    }

    export interface IAuthor {
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        ID: number;
        name: string;
        dateOfBirth: Date;
        dateOfDeath: Date;
        placeOfBirth: string;
        placeOfDeath: string;
        books?: IBook[];
    }

    export interface IGenre {
        name: string;
        descr: string;
        ID: number;
        parent?: IGenre;
        parent_ID?: number;
        children: IGenre[];
        texts: ITexts[];
        localized?: ITexts;
    }

    export interface ITexts {
        locale: string;
        ID: number;
        title: string;
        descr: string;
    }

    export interface ITexts {
        locale: string;
        name: string;
        descr: string;
        ID: number;
    }

    export enum Entity {
        Book = "cap.bookshop.typescript.Book",
        Author = "cap.bookshop.typescript.Author",
        Genre = "cap.bookshop.typescript.Genre",
        Texts = "cap.bookshop.typescript.Genre.texts",
    }

    export enum SanitizedEntity {
        Book = "Book",
        Author = "Author",
        Genre = "Genre",
        Texts = "Texts",
    }
}

export namespace sap.common {
    export interface ILanguages {
        name: string;
        descr: string;
        code: string;
        texts: ITexts[];
        localized?: ITexts;
    }

    export interface ICountries {
        name: string;
        descr: string;
        code: string;
        texts: ITexts[];
        localized?: ITexts;
    }

    export interface ICurrencies {
        name: string;
        descr: string;
        code: string;
        symbol: string;
        texts: ITexts[];
        localized?: ITexts;
    }

    export interface ITexts {
        locale: string;
        name: string;
        descr: string;
        code: string;
    }

    export interface ITexts {
        locale: string;
        name: string;
        descr: string;
        code: string;
    }

    export interface ITexts {
        locale: string;
        name: string;
        descr: string;
        code: string;
    }

    export enum Entity {
        Languages = "sap.common.Languages",
        Countries = "sap.common.Countries",
        Currencies = "sap.common.Currencies",
        Texts = "sap.common.Currencies.texts",
    }

    export enum SanitizedEntity {
        Languages = "Languages",
        Countries = "Countries",
        Currencies = "Currencies",
        Texts = "Texts",
    }
}

export namespace CatalogService {
    export interface IBook {
        createdAt?: Date;
        modifiedAt?: Date;
        ID: number;
        title: string;
        descr: string;
        author: string;
        genre?: IGenre;
        genre_ID?: number;
        stock: number;
        price: number;
        currency: ICurrencies;
        currency_code?: string;
        texts: ITexts[];
        localized?: ITexts;
    }

    export interface IGenre {
        name: string;
        descr: string;
        ID: number;
        parent?: IGenre;
        parent_ID?: number;
        children: IGenre[];
        texts: ITexts[];
        localized?: ITexts;
    }

    export interface ICurrencies {
        name: string;
        descr: string;
        code: string;
        symbol: string;
        texts: ITexts[];
        localized?: ITexts;
    }

    export interface ITexts {
        locale: string;
        ID: number;
        title: string;
        descr: string;
    }

    export interface ITexts {
        locale: string;
        name: string;
        descr: string;
        ID: number;
    }

    export interface ITexts {
        locale: string;
        name: string;
        descr: string;
        code: string;
    }

    export enum ActionSubmitOrder {
        name = "submitOrder",
        paramBook = "book",
        paramAmount = "amount",
    }

    export interface IActionSubmitOrderParams {
        book: number;
        amount: number;
    }

    export enum Entity {
        Book = "CatalogService.Book",
        Genre = "CatalogService.Genre",
        Currencies = "CatalogService.Currencies",
        Texts = "CatalogService.Currencies.texts",
    }

    export enum SanitizedEntity {
        Book = "Book",
        Genre = "Genre",
        Currencies = "Currencies",
        Texts = "Texts",
    }
}

export type User = string;

export enum Entity {}

export enum SanitizedEntity {}
