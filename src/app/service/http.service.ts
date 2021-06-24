import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { lists } from '../../assets/mock/sublists';
import { ProductDto } from '../models/product-dto';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
//環境変数からドメインをインスタンス化
  public URL = "https://......"

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  }

  constructor(
    private http: HttpClient,
  ) {

  }

/**
 *
 * @param operation - 失敗した操作の名前
 * @param result - observableな結果として返す任意の値
 * 失敗したHttp操作を処理します。
 * アプリを持続させます。*/
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      //TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); //かわりにConsoleに出力

      //TODO: ユーザへの開示のためにエラーの変換処理を改善する
      console.log(`${operation} failed: ${error.message}`);

      //　空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }

/**
 *
 *
 *
 *
 * */
  public getlist() {
    return this.http.get(this.URL + '', this.httpOptions)
  }

/**
 *
 *
 *
 * 新規登録サービス
 * */
  public catPost(get) {
    return this.http.post('http://localhost:8888/file-upload.php', get.value)
      .subscribe(response => {
        alert('Image has been uploaded.');
      })

  }

/**
 *
 *
 *
 *
 * */
  public getProduct() {
  }

}
