import cds from "@sap/cds";
import { Handler, Req,  Param, Action } from "cds-routing-handlers";
import { CatalogService, demoService } from "../entities";

/**
 * Function handler.
 *
 * @export
 * @class FunctionHandler
 */
@Handler()
export class FunctionHandler {
    // The @Param decorator imports a url-parameter defined in your function definition
    // The @Req decorator import the current request object
    @Action(CatalogService.ActionSubmitOrder.name)
    public async submitOrder(
        @Param(CatalogService.ActionSubmitOrder.paramBook) bookId: CatalogService.IBook["ID"],
        @Param(CatalogService.ActionSubmitOrder.paramAmount) amount: number,
        @Req() req: any
    ): Promise<void> {
        console.log(`Action ${CatalogService.ActionSubmitOrder.name} called`);
        const n = await cds
            .update(CatalogService.SanitizedEntity.Book)
            .with({ stock: { "-=": amount } })
            .where({ ID: bookId, stock: { ">=": amount } });
        n > 0 || req.error(409, `${amount} exceeds stock for book #${bookId}`);
    }

    @Action(demoService.ActionLikeAuthor.name)
    public async likeAuthor(
        @Param(demoService.ActionLikeAuthor.paramAuthor) AuthorId: demoService.IAuthor["ID"],
        @Req() req: any
    ): Promise<void> {
        console.log(`Action ${demoService.ActionLikeAuthor.name} called`);
        const n = await cds
            .update(demoService.SanitizedEntity.Author)
            .with ({ like: {'+=': 1 }})
            .where ({ ID: AuthorId });
        n > 0 || req.error(404, `${AuthorId} doesn't exist!`);
    }
}
