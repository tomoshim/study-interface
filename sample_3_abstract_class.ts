/**
 * サンプル3. 抽象型の親クラス
 */

// ファイル情報
class FileInfo {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// 抽象型の親クラス
abstract class AbstractFileStorage {
    save(file: FileInfo) {
        console.log(`${this.getServiceName()}に${file.name}を保存しました`);
    }

    // 抽象メソッドを定義できる。子クラスは必ずこのメソッドの詳細を実装しなければならない
    abstract getServiceName(): string;
}

// 外部ライブラリ
class StorageLibrary {
    saveAsTextFile(fileName: string) {
        console.log(`StorageLibrary: ${fileName}`);
    }
}

// ファイルをローカルに保存する
// caution: 多重継承できない
class LocalFileStorage extends AbstractFileStorage, StorageLibrary {
    getServiceName() {
        return 'ローカル';
    }
}

// ファイルをGoogleドライブに保存する
// caution: 多重継承できない
class GoogleDriveFileStorage extends AbstractFileStorage, StorageLibrary {
    getServiceName() {
        return 'Googleドライブ';
    }
}

// メインの処理。runでファイルA.pdfを保存する
class Main {
    run(storage: AbstractFileStorage) {
        const file = new FileInfo('ファイルA.pdf');

        storage.save(file);
    }
}

const main = new Main();

main.run(
    new LocalFileStorage()
);

main.run(
    new GoogleDriveFileStorage()
);
