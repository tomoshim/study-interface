/**
 * サンプル5. インターフェースの応用
 */

// ファイル情報
class FileInfo {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

interface FileStorageInterface {
    save(file: FileInfo);
}

interface FileLoaderInterface {
    load(fileName: string): FileInfo | null;
}

// インターフェース同士であれば多重継承も可能
interface CsvFileManagerInterface extends FileStorageInterface, FileLoaderInterface {
}

// ファイルをローカルに保存する
// 多重での実装が可能
// こちらはsave時にloadでファイルの存在チェックを行う
class LocalFileStorage implements FileStorageInterface, FileLoaderInterface {
    save(file: FileInfo) {
        if (this.load(file.name)) {
            throw new Error('既に存在するファイルです');
        }

        console.log(`ローカルに${file.name}を保存しました`);
    }

    load(fileName: string): FileInfo | null {
        if (fileName === 'ファイルA.pdf') {
            return new FileInfo(fileName);
        }

        return null;
    }
}

// ファイルをGoogleドライブに保存する
class GoogleDriveFileStorage implements FileStorageInterface {
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
class StorageLibrary extends BaseStorageLibrary {
}

/**
 * 継承と重複しない
 */
class StorageLibraryAdaptor extends StorageLibrary implements FileStorageInterface {
    save(file: FileInfo) {
        this.saveAsTextFile(file.name);
    }
}

// メインの処理。runでファイルA.pdfを保存する
class Main {
    run(storage: FileStorageInterface) {
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
