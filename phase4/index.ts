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

// ファイルをローカルに保存する
class LocalFileStorage implements FileStorageInterface {
    // caution: 実装クラスごとに定義が必要
    save(file: FileInfo) {
        console.log(`ローカルに${file.name}を保存しました`);
    }

    // インターフェースで定義していないメソッドは実装クラス同士で影響しない
    load(fileName: string): FileInfo | null {
        if (fileName === 'ファイルA.pdf') {
            return new FileInfo(fileName);
        }

        return null;
    }
}

// ファイルをGoogleドライブに保存する
class GoogleDriveFileStorage implements FileStorageInterface {
    // caution: 実装クラスごとに定義が必要
    save(file: FileInfo) {
        console.log(`Googleドライブに${file.name}を保存しました`);
    }

    // インターフェースで定義していないメソッドは実装クラス同士で影響しない
    load(fileName: string): FileInfo | null {
        return new FileInfo(fileName);
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
)

main.run(
    new GoogleDriveFileStorage()
)
