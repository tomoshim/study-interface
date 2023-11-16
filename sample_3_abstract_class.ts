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
    // 抽象メソッドを定義できる。子クラスは必ずこのメソッドの詳細を実装しなければならない
    abstract save(file: FileInfo);
}

// ファイルをローカルに保存する
/**
 * caution: 多重継承できない
 */
class LocalFileStorage extends AbstractFileStorage {
    save(file: FileInfo) {
        console.log(`ローカルに${file.name}を保存しました`);
    }
}

// ファイルをGoogleドライブに保存する
/**
 * caution: 多重継承できない
 */
class GoogleDriveFileStorage extends AbstractFileStorage {
    save(file: FileInfo) {
        console.log(`Googleドライブに${file.name}を保存しました`);
    }
}

// 外部ライブラリ
abstract class BaseStorageLibrary {
    saveAsTextFile(fileName: string) {
        console.log(`StorageLibrary: ${fileName}`);
    }
}

/**
 * caution: 多重継承できない
 */
class StorageLibrary extends BaseStorageLibrary, AbstractFileStorage {
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
