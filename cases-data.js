const casesData = [
    {
        id: "lv-speedy",
        title: "ルイ・ヴィトン スピーディ30 モノグラム",
        date: "2024.03.15",
        price: "65,000円",
        mainImage: "case_lv_bag_main_1771171038668.png",
        subImages: [
            "case_lv_bag_main_1771171038668.png",
            "ex_brand_bag_1771164741685.png" // Reusing verify image as sub
        ],
        description: "長年ご愛用されていたとのことですが、持ち手のヌメ革の変色も味わいとして評価。内側の状態も比較的良好でしたので、高価買取させていただきました。",
        category: "ブランド品"
    },
    {
        id: "rolex-sub",
        title: "ロレックス サブマリーナデイト 16610",
        date: "2024.03.12",
        price: "1,150,000円",
        mainImage: "case_rolex_watch_main_1771171053726.png",
        subImages: [
            "case_rolex_watch_main_1771171053726.png"
        ],
        description: "付属品完備、オーバーホール履歴ありの良品。相場高騰中のモデルにつき、限界価格をご提示させていただきました。",
        category: "時計"
    },
    {
        id: "k18-ring",
        title: "K18 ダイヤモンドリング 1.5ct",
        date: "2024.03.10",
        price: "128,000円",
        mainImage: "case_gold_ring_main_1771171069333.png",
        subImages: [
            "case_gold_ring_main_1771171069333.png"
        ],
        description: "デザインが古くても、金相場＋ダイヤモンドの品質（4C）をしっかり評価。地金重量以上の価格がつきました。",
        category: "金・貴金属"
    },
    {
        id: "diamond-necklace",
        title: "プラチナ ダイヤモンドネックレス 0.5ct",
        date: "2024.03.09",
        price: "95,000円",
        mainImage: "case_gold_ring_main_1771171069333.png",
        subImages: [],
        description: "チェーン切れがありましたが、ダイヤモンドの質が良く高価買取いたしました。",
        category: "ダイヤ・宝石"
    },
    {
        id: "leica-m3",
        title: "Leica M3 ブラックペイント ボディ",
        date: "2024.03.08",
        price: "850,000円",
        mainImage: "case_camera_main_1771171083983.png",
        subImages: [
            "case_camera_main_1771171083983.png"
        ],
        description: "経年による塗装剥がれ（ブラックペイントの味）をプラス査定。動作もスムーズで、マニア垂涎の逸品です。",
        category: "カメラ"
    },
    {
        id: "iphone-15",
        title: "iPhone 15 Pro Max 256GB",
        date: "2024.03.07",
        price: "140,000円",
        mainImage: "case_camera_main_1771171083983.png",
        subImages: [],
        description: "機種変更で不要になった未開封品をお持ち込みいただきました。",
        category: "スマホ・タブレット"
    },
    {
        id: "stamp-sheet",
        title: "見返り美人・月に雁 ほか切手シート",
        date: "2024.03.05",
        price: "15,000円",
        mainImage: "case_stamp_main_1771171099707.png",
        subImages: [
            "case_stamp_main_1771171099707.png"
        ],
        description: "プレミア切手を含むコレクション整理。保存状態が非常に良く、シミやヒンジ跡もなかったため高額査定となりました。",
        category: "切手"
    },
    {
        id: "old-coin-set",
        title: "明治一円銀貨 ほか古銭セット",
        date: "2024.03.04",
        price: "28,000円",
        mainImage: "case_stamp_main_1771171099707.png",
        subImages: [],
        description: "蔵の整理で出てきた古銭をまとめて査定。希少な年号が含まれていました。",
        category: "古銭"
    },
    {
        id: "telecard-collection",
        title: "アイドル・アニメ テレホンカード 50度数",
        date: "2024.03.03",
        price: "12,000円",
        mainImage: "case_stamp_main_1771171099707.png",
        subImages: [],
        description: "昔集めていたコレクションを整理。未使用品で状態も良く、プレミアム価格がつきました。",
        category: "テレカ"
    },
    {
        id: "yamaha-guitar",
        title: "Gibson Les Paul Standard",
        date: "2024.03.02",
        price: "180,000円",
        mainImage: "case_rolex_watch_main_1771171053726.png",
        subImages: [],
        description: "弾かなくなったギターを出張買取。ハードケース付きで高評価。",
        category: "楽器"
    },
    {
        id: "makita-drill",
        title: "マキタ 充電式インパクトドライバ",
        date: "2024.03.02",
        price: "18,000円",
        mainImage: "case_camera_main_1771171083983.png",
        subImages: [],
        description: "仕事で使わなくなった電動工具。バッテリー2個付きでプラス査定。",
        category: "工具"
    },
    {
        id: "whisky-yamazaki",
        title: "サントリー 山崎18年 シングルモルト",
        date: "2024.03.02",
        price: "95,000円",
        mainImage: "case_lv_bag_main_1771171038668.png",
        subImages: [],
        description: "頂き物で飲まない洋酒・国産ウイスキーなどをまとめて買取いたしました。",
        category: "お酒"
    },
    {
        id: "hermes-birkin",
        title: "エルメス バーキン30 トゴ",
        date: "2024.03.01",
        price: "2,100,000円",
        mainImage: "case_lv_bag_main_1771171038668.png",
        subImages: ["case_lv_bag_main_1771171038668.png"],
        description: "人気カラーのエトゥープ。使用感も少なく、新品同様のコンディションでした。",
        category: "ブランド品"
    },
    {
        id: "chanel-matelasse",
        title: "シャネル マトラッセ チェーンショルダー",
        date: "2024.02.28",
        price: "450,000円",
        mainImage: "case_lv_bag_main_1771171038668.png",
        subImages: ["case_lv_bag_main_1771171038668.png"],
        description: "ヴィンテージシャネルの人気高騰により、20年前のお品物でも高価買取。",
        category: "ブランド品"
    },
    {
        id: "omega-speedmaster",
        title: "オメガ スピードマスター プロフェッショナル",
        date: "2024.02.25",
        price: "380,000円",
        mainImage: "case_rolex_watch_main_1771171053726.png",
        subImages: ["case_rolex_watch_main_1771171053726.png"],
        description: "付属品なし、本体のみでしたが、動作良好のためしっかりとお値段をつけさせていただきました。",
        category: "時計"
    }
];
