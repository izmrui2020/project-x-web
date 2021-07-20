// export interface Oogiri {
//   id: number,
// 	title: string,
//   oogiri: string,
// 	description?: string,
//   //誰が作ったのか？
// 	// file_url: string, //後で消す。
// 	// updated_at: string,
// 	image_url: string,
// }

export class Oogiri {
	constructor(
		public id: number,
		public title: string,
		public oogiri: string,
		public description?: string,
    public image_url?: string,
	) {}
}
