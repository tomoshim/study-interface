// ファイル情報
class FileInfo {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class BaseFileStorage {
    save(file: FileInfo) {
        // caution: どのサービスかこの時点で決めないといけない
    }

    // save(file: FileInfo, storageType: string) {
    //     // caution: 子クラス全部の引数を変更する必要がある
    //     // caution: 子クラス分分岐が必要
    //     // caution: 修正すると全ての子クラスに影響が出る可能性がある
    //     if (storageType === 'local') {
    //         // ~~~
    //     } else if (storageType === 'google_drive') {
    //         // ~~~
    //     } else if (storageType === '~~~') {
    //         // ~~~
    //     }
    // }

    // caution: 子クラス全部にstorageTypeを設定する必要がある
    // caution: 他の開発者が、save以外の用途に使ってしまう可能性がある
    // private storageType: string;
    //
    // save(file: FileInfo) {
    //     // caution: 子クラス分分岐が必要
    //     // caution: 修正すると全ての子クラスに影響が出る可能性がある
    //     if (this.storageType === 'local') {
    //         // ~~~
    //     } else if (this.storageType === 'google_drive') {
    //         // ~~~
    //     } else if (this.storageType === '~~~') {
    //         // ~~~
    //     }
    // }
}

// ファイルをローカルに保存する
class LocalFileStorage extends BaseFileStorage {
    save(file: FileInfo) {
        console.log(`ローカルに${file.name}を保存しました`);
    }
}

// ファイルをGoogleドライブに保存する
class GoogleDriveFileStorage extends BaseFileStorage {
    save(file: FileInfo) {
        console.log(`Googleドライブに${file.name}を保存しました`);
    }
}

// メインの処理。runでファイルA.pdfを保存する
class Main {
    run(storage: BaseFileStorage) {
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
