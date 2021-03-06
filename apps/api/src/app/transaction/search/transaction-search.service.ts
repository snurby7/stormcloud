import { Injectable } from '@nestjs/common';
import { IMonthBoundary, ITransactionDetail } from 'contracts';
import { Observable } from 'rxjs';
import { materialize, toArray } from 'rxjs/operators';
import { Neo4jService } from '../../neo4j';
import { transformRecordToDetail } from '../../neo4j/rxjs/neo4j.operators';
import { searchQueries } from '../queries/transaction-search.queries';

@Injectable()
export class TransactionSearchService {
  constructor(private neo4jService: Neo4jService) {}

  /**
   * Retrieve all the transactions linked to a given payee on the given budget
   * This will also return the category/account it is tied to as well
   *
   * @param {string} budgetId The id of the budget to be a node of
   * @param {string} payeeId The id of the payee it is linked to.
   * @returns {Observable<ITransactionDetail[]>}
   * @memberof TransactionSearchService
   */
  public getTransactionsByPayee(
    budgetId: string,
    payeeId: string,
  ): Observable<ITransactionDetail[]> {
    const {
      query,
      params,
      recordBase,
      formatKeyMap, // TODO take these values and turn them into an IFormattedNode
    } = searchQueries.getTransactionByPayee(payeeId, budgetId);
    return this.neo4jService.rxSession.readTransaction((trx) =>
      trx
        .run(query, params)
        .records()
        .pipe(
          materialize(),
          toArray(),
          transformRecordToDetail(
            recordBase,
            formatKeyMap as Record<string, string>,
          ),
        ),
    );
  }

  /**
   * Retrieve all the transactions linked to a given category on the given budget
   * This will also return the payee/account it is tied to as well
   *
   * @param {string} budgetId The id of the budget to be a node of
   * @param {string} categoryId The id of the category it is linked to.
   * @returns {Observable<ITransactionDetail[]>}
   * @memberof TransactionSearchService
   */
  public getTransactionByCategory(
    budgetId: string,
    categoryId: string,
  ): Observable<ITransactionDetail[]> {
    const {
      query,
      params,
      recordBase,
      formatKeyMap, // TODO take these values and turn them into an IFormattedNode
    } = searchQueries.getTransactionByCategory(categoryId, budgetId);
    return this.neo4jService.rxSession.readTransaction((trx) =>
      trx
        .run(query, params)
        .records()
        .pipe(
          materialize(),
          toArray(),
          transformRecordToDetail(
            recordBase,
            formatKeyMap as Record<string, string>,
          ),
        ),
    );
  }

  /**
   * Retrieve all the transactions linked to a given account on the given budget
   * This will also return the payee/account it is tied to as well
   *
   * @param {string} budgetId The id of the budget to be a node of
   * @param {string} accountId The id of the account it is linked to.
   * @returns {Observable<ITransactionDetail[]>}
   * @memberof TransactionSearchService
   */
  public getTransactionsByAccount(
    budgetId: string,
    accountId: string,
  ): Observable<ITransactionDetail[]> {
    const { query, params, recordBase, formatKeyMap } =
      searchQueries.getTransactionByAccount(accountId, budgetId);
    return this.neo4jService.rxSession.readTransaction((trx) =>
      trx
        .run(query, params)
        .records()
        .pipe(
          materialize(),
          toArray(),
          transformRecordToDetail(
            recordBase,
            formatKeyMap as Record<string, string>,
          ),
        ),
    );
  }

  /**
   * Function which will get you the transactions for a given budgetId between two points in time.
   *
   * @param {string} budgetId
   * @param {IMonthBoundary} request
   * @returns {Observable<ITransactionDetail[]>}
   * @memberof TransactionSearchService
   */
  public getTransactionsByDateBoundary(
    budgetId: string,
    request: IMonthBoundary,
  ): Observable<ITransactionDetail[]> {
    const { query, params, recordBase, formatKeyMap } =
      searchQueries.getTransactionsByRange(budgetId, request);
    return this.neo4jService.rxSession.readTransaction((trx) =>
      trx
        .run(query, params)
        .records()
        .pipe(
          materialize(),
          toArray(),
          transformRecordToDetail(
            recordBase,
            formatKeyMap as Record<string, string>,
          ),
        ),
    );
  }
}
