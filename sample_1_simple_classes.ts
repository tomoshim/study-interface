/**
 * サンプル1. 一般的なクラス作成
 */

// ファイル情報
class FileInfo {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// ファイルをローカルに保存する
class LocalFileStorage {
    save(file: FileInfo) {
        console.log(`ローカルに${file.name}を保存しました`);
    }
}

// ファイルをGoogleドライブに保存する
class GoogleDriveFileStorage {
    save(file: FileInfo) {
        console.log(`Googleドライブに${file.name}を保存しました`);
    }
}

// メインの処理。runでファイルA.pdfを保存する
class Main {
    run(storage: LocalFileStorage) {
        const file = new FileInfo('ファイルA.pdf');

        storage.save(file);
    }
}

const main = new Main();

/**
 *LocalFileStorage以外の保存先が選べない
 */
main.run(
    new LocalFileStorage()
);
