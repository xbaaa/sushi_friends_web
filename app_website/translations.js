// Translations for all pages
const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      privacy: "Privacy",
      terms: "Terms",
      support: "Support"
    },
    download: {
      downloadOn: "Download on the",
      getItOn: "Get it on"
    },
    features: {
      title: "Powerful Features",
      subtitle: "Everything you need for the perfect sushi experience"
    },
    footer: {
      links: "Quick Links",
      download: "Download App",
      rights: "All rights reserved.",
      version: "Version"
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated",
      sections: {
        intro: {
          title: "Introduction",
          content: "We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use {appName}."
        },
        dataCollection: {
          title: "Information We Collect",
          content: "We collect the following types of information:",
          items: [
            "Usage data: Information about how you use the app",
            "Device information: Device type, operating system, and unique identifiers",
            "Analytics data: App performance and crash reports",
            "Optional data: Information you choose to provide"
          ]
        },
        dataUsage: {
          title: "How We Use Your Information",
          content: "We use the collected information to:",
          items: [
            "Provide and maintain our service",
            "Improve user experience",
            "Analyze app usage and performance",
            "Send important updates and notifications",
            "Comply with legal obligations"
          ]
        },
        dataSharing: {
          title: "Data Sharing",
          content: "We do not sell your personal information. We may share data with:",
          items: [
            "Service providers who assist in app operations",
            "Analytics services (Google Analytics, Firebase)",
            "Advertising partners (Google AdMob) for personalized ads",
            "Legal authorities when required by law"
          ]
        },
        dataSecurity: {
          title: "Data Security",
          content: "We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure."
        },
        userRights: {
          title: "Your Rights",
          content: "You have the right to:",
          items: [
            "Access your personal data",
            "Request data deletion",
            "Opt-out of personalized advertising",
            "Withdraw consent at any time"
          ]
        },
        thirdParty: {
          title: "Third-Party Services",
          content: "Our app uses the following third-party services:",
          items: [
            "Google AdMob - for advertising",
            "RevenueCat - for subscription management",
            "Firebase Analytics - for app analytics"
          ]
        },
        children: {
          title: "Children's Privacy",
          content: "Our app is not intended for children under 13. We do not knowingly collect data from children."
        },
        changes: {
          title: "Changes to This Policy",
          content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page."
        },
        contact: {
          title: "Contact Us",
          content: "If you have questions about this privacy policy, please contact us at:"
        }
      }
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last Updated",
      sections: {
        intro: {
          title: "Agreement to Terms",
          content: "By accessing or using {appName}, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our app."
        },
        license: {
          title: "License",
          content: "We grant you a limited, non-exclusive, non-transferable license to use {appName} for personal, non-commercial purposes."
        },
        restrictions: {
          title: "Restrictions",
          content: "You agree not to:",
          items: [
            "Modify, reverse engineer, or decompile the app",
            "Use the app for any illegal purpose",
            "Attempt to gain unauthorized access to our systems",
            "Interfere with the proper functioning of the app",
            "Remove any copyright or proprietary notices"
          ]
        },
        subscription: {
          title: "Subscription and Payments",
          content: "Premium features require a subscription. Subscriptions are managed through the App Store or Google Play Store and are subject to their terms and conditions.",
          items: [
            "Subscriptions auto-renew unless cancelled",
            "Cancellation must be done through your app store account",
            "Refunds are subject to App Store/Google Play policies",
            "Prices may change with notice"
          ]
        },
        content: {
          title: "User Content",
          content: "You retain ownership of any content you create in the app. By using the app, you grant us a license to use, store, and process your content to provide the service."
        },
        disclaimer: {
          title: "Disclaimer",
          content: "The app is provided 'as is' without warranties of any kind. We do not guarantee that the app will be error-free or uninterrupted."
        },
        limitation: {
          title: "Limitation of Liability",
          content: "We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the app."
        },
        termination: {
          title: "Termination",
          content: "We reserve the right to terminate or suspend your access to the app at any time, without notice, for conduct that we believe violates these terms."
        },
        changes: {
          title: "Changes to Terms",
          content: "We reserve the right to modify these terms at any time. Continued use of the app after changes constitutes acceptance of the new terms."
        },
        governing: {
          title: "Governing Law",
          content: "These terms shall be governed by and construed in accordance with applicable laws."
        },
        contact: {
          title: "Contact Us",
          content: "If you have questions about these terms, please contact us at:"
        }
      }
    },
    support: {
      title: "Support",
      sections: {
        intro: {
          title: "How Can We Help?",
          content: "We're here to help you get the most out of {appName}. Choose from the options below:"
        },
        faq: {
          title: "Frequently Asked Questions",
          items: [
            {
              q: "How do I use the calculator?",
              a: "Simply tap on dishes to add them to your order. The app will automatically calculate the total price and track your spending."
            },
            {
              q: "What are the premium features?",
              a: "Premium features include ad-free experience, unlimited history, advanced statistics, and priority support."
            },
            {
              q: "How do I cancel my subscription?",
              a: "Go to your device's App Store or Google Play Store settings, find your subscriptions, and cancel from there."
            },
            {
              q: "Is my data safe?",
              a: "Yes, we take data security seriously. All data is stored securely and we never sell your personal information."
            },
            {
              q: "Can I use the app offline?",
              a: "Yes, most features work offline. Your data will sync when you're back online."
            }
          ]
        },
        contact: {
          title: "Contact Support",
          content: "Still need help? Reach out to us:",
          email: "Email",
          response: "We typically respond within 24-48 hours."
        },
        feedback: {
          title: "Feedback & Suggestions",
          content: "We love hearing from our users! Share your ideas and help us improve {appName}."
        }
      }
    },
    common: {
      backToApp: "Back to App",
      language: "Language",
      loading: "Loading..."
    }
  },
  ja: {
    nav: {
      home: "ホーム",
      features: "機能",
      privacy: "プライバシー",
      terms: "利用規約",
      support: "サポート"
    },
    download: {
      downloadOn: "ダウンロード",
      getItOn: "入手"
    },
    features: {
      title: "強力な機能",
      subtitle: "完璧な寿司体験に必要なすべて"
    },
    footer: {
      links: "クイックリンク",
      download: "アプリをダウンロード",
      rights: "全著作権所有。",
      version: "バージョン"
    },
    privacy: {
      title: "プライバシーポリシー",
      lastUpdated: "最終更新日",
      sections: {
        intro: {
          title: "はじめに",
          content: "私たちはあなたのプライバシーを尊重し、個人データの保護に取り組んでいます。このプライバシーポリシーは、{appName}を使用する際に、私たちがどのように情報を収集、使用、保護するかを説明します。"
        },
        dataCollection: {
          title: "収集する情報",
          content: "以下の種類の情報を収集します：",
          items: [
            "使用データ：アプリの使用方法に関する情報",
            "デバイス情報：デバイスの種類、オペレーティングシステム、固有識別子",
            "分析データ：アプリのパフォーマンスとクラッシュレポート",
            "オプションデータ：ユーザーが提供することを選択した情報"
          ]
        },
        dataUsage: {
          title: "情報の使用方法",
          content: "収集した情報は以下の目的で使用します：",
          items: [
            "サービスの提供と維持",
            "ユーザーエクスペリエンスの向上",
            "アプリの使用状況とパフォーマンスの分析",
            "重要な更新と通知の送信",
            "法的義務の遵守"
          ]
        },
        dataSharing: {
          title: "データの共有",
          content: "個人情報を販売することはありません。以下の場合にデータを共有することがあります：",
          items: [
            "アプリ運営を支援するサービスプロバイダー",
            "分析サービス（Google Analytics、Firebase）",
            "広告パートナー（Google AdMob）によるパーソナライズド広告",
            "法律で要求される場合の法的機関"
          ]
        },
        dataSecurity: {
          title: "データセキュリティ",
          content: "情報を保護するために適切なセキュリティ対策を実施しています。ただし、インターネット上の送信方法は100％安全ではありません。"
        },
        userRights: {
          title: "ユーザーの権利",
          content: "以下の権利があります：",
          items: [
            "個人データへのアクセス",
            "データ削除のリクエスト",
            "パーソナライズド広告のオプトアウト",
            "いつでも同意を撤回"
          ]
        },
        thirdParty: {
          title: "サードパーティサービス",
          content: "当アプリは以下のサードパーティサービスを使用しています：",
          items: [
            "Google AdMob - 広告配信",
            "RevenueCat - サブスクリプション管理",
            "Firebase Analytics - アプリ分析"
          ]
        },
        children: {
          title: "子供のプライバシー",
          content: "当アプリは13歳未満の子供を対象としていません。子供からデータを故意に収集することはありません。"
        },
        changes: {
          title: "ポリシーの変更",
          content: "このプライバシーポリシーは随時更新される場合があります。変更があった場合は、このページに新しいポリシーを掲載してお知らせします。"
        },
        contact: {
          title: "お問い合わせ",
          content: "このプライバシーポリシーについてご質問がある場合は、以下までお問い合わせください："
        }
      }
    },
    terms: {
      title: "利用規約",
      lastUpdated: "最終更新日",
      sections: {
        intro: {
          title: "規約への同意",
          content: "{appName}にアクセスまたは使用することにより、本利用規約に同意したものとみなされます。これらの規約の一部に同意できない場合は、アプリを使用できません。"
        },
        license: {
          title: "ライセンス",
          content: "{appName}を個人的、非商業的な目的で使用するための限定的、非独占的、譲渡不可のライセンスを付与します。"
        },
        restrictions: {
          title: "制限事項",
          content: "以下の行為を行わないことに同意します：",
          items: [
            "アプリの改変、リバースエンジニアリング、逆コンパイル",
            "違法な目的でのアプリの使用",
            "システムへの不正アクセスの試み",
            "アプリの適切な機能の妨害",
            "著作権または所有権表示の削除"
          ]
        },
        subscription: {
          title: "サブスクリプションと支払い",
          content: "プレミアム機能にはサブスクリプションが必要です。サブスクリプションはApp StoreまたはGoogle Play Storeを通じて管理され、それらの利用規約に従います。",
          items: [
            "サブスクリプションはキャンセルされない限り自動更新されます",
            "キャンセルはアプリストアアカウントから行う必要があります",
            "返金はApp Store/Google Playのポリシーに従います",
            "価格は通知により変更される場合があります"
          ]
        },
        content: {
          title: "ユーザーコンテンツ",
          content: "アプリ内で作成したコンテンツの所有権は保持されます。アプリを使用することにより、サービスを提供するためにコンテンツを使用、保存、処理するライセンスを当社に付与します。"
        },
        disclaimer: {
          title: "免責事項",
          content: "アプリは「現状のまま」提供され、いかなる種類の保証もありません。アプリがエラーフリーまたは中断されないことを保証しません。"
        },
        limitation: {
          title: "責任の制限",
          content: "アプリの使用から生じる間接的、偶発的、特別、または結果的な損害について、当社は責任を負いません。"
        },
        termination: {
          title: "終了",
          content: "これらの規約に違反すると判断した行為について、通知なしにいつでもアプリへのアクセスを終了または停止する権利を留保します。"
        },
        changes: {
          title: "規約の変更",
          content: "いつでもこれらの規約を変更する権利を留保します。変更後もアプリを継続して使用することは、新しい規約への同意を構成します。"
        },
        governing: {
          title: "準拠法",
          content: "これらの規約は適用法に準拠し、解釈されるものとします。"
        },
        contact: {
          title: "お問い合わせ",
          content: "これらの規約についてご質問がある場合は、以下までお問い合わせください："
        }
      }
    },
    support: {
      title: "サポート",
      sections: {
        intro: {
          title: "どのようにお手伝いできますか？",
          content: "{appName}を最大限に活用できるようサポートします。以下のオプションからお選びください："
        },
        faq: {
          title: "よくある質問",
          items: [
            {
              q: "計算機の使い方は？",
              a: "料理をタップして注文に追加するだけです。アプリが自動的に合計金額を計算し、支出を追跡します。"
            },
            {
              q: "プレミアム機能とは？",
              a: "プレミアム機能には、広告なし体験、無制限の履歴、高度な統計、優先サポートが含まれます。"
            },
            {
              q: "サブスクリプションをキャンセルするには？",
              a: "デバイスのApp StoreまたはGoogle Play Storeの設定に移動し、サブスクリプションを見つけてキャンセルしてください。"
            },
            {
              q: "データは安全ですか？",
              a: "はい、データセキュリティを真剣に考えています。すべてのデータは安全に保存され、個人情報を販売することはありません。"
            },
            {
              q: "オフラインで使用できますか？",
              a: "はい、ほとんどの機能はオフラインで動作します。オンラインに戻るとデータが同期されます。"
            }
          ]
        },
        contact: {
          title: "サポートに連絡",
          content: "まだサポートが必要ですか？お問い合わせください：",
          email: "メール",
          response: "通常24〜48時間以内に返信します。"
        },
        feedback: {
          title: "フィードバックと提案",
          content: "ユーザーの声をお聞かせください！アイデアを共有して、{appName}の改善にご協力ください。"
        }
      }
    },
    common: {
      backToApp: "アプリに戻る",
      language: "言語",
      loading: "読み込み中..."
    }
  },
  zh: {
    nav: {
      home: "首頁",
      features: "功能",
      privacy: "隱私",
      terms: "條款",
      support: "支援"
    },
    download: {
      downloadOn: "下載於",
      getItOn: "取得於"
    },
    features: {
      title: "強大功能",
      subtitle: "完美壽司體驗所需的一切"
    },
    footer: {
      links: "快速連結",
      download: "下載應用程式",
      rights: "版權所有。",
      version: "版本"
    },
    privacy: {
      title: "隱私政策",
      lastUpdated: "最後更新",
      sections: {
        intro: {
          title: "簡介",
          content: "我們尊重您的隱私並致力於保護您的個人資料。本隱私政策說明我們在您使用{appName}時如何收集、使用和保護您的資訊。"
        },
        dataCollection: {
          title: "我們收集的資訊",
          content: "我們收集以下類型的資訊：",
          items: [
            "使用資料：關於您如何使用應用程式的資訊",
            "裝置資訊：裝置類型、作業系統和唯一識別碼",
            "分析資料：應用程式效能和崩潰報告",
            "選擇性資料：您選擇提供的資訊"
          ]
        },
        dataUsage: {
          title: "我們如何使用您的資訊",
          content: "我們使用收集的資訊來：",
          items: [
            "提供和維護我們的服務",
            "改善使用者體驗",
            "分析應用程式使用情況和效能",
            "發送重要更新和通知",
            "遵守法律義務"
          ]
        },
        dataSharing: {
          title: "資料共享",
          content: "我們不會出售您的個人資訊。我們可能會與以下對象共享資料：",
          items: [
            "協助應用程式運營的服務提供商",
            "分析服務（Google Analytics、Firebase）",
            "廣告合作夥伴（Google AdMob）用於個人化廣告",
            "法律要求時的法律機構"
          ]
        },
        dataSecurity: {
          title: "資料安全",
          content: "我們實施適當的安全措施來保護您的資訊。然而，沒有任何網際網路傳輸方法是100%安全的。"
        },
        userRights: {
          title: "您的權利",
          content: "您有權：",
          items: [
            "存取您的個人資料",
            "請求刪除資料",
            "選擇退出個人化廣告",
            "隨時撤回同意"
          ]
        },
        thirdParty: {
          title: "第三方服務",
          content: "我們的應用程式使用以下第三方服務：",
          items: [
            "Google AdMob - 用於廣告",
            "RevenueCat - 用於訂閱管理",
            "Firebase Analytics - 用於應用程式分析"
          ]
        },
        children: {
          title: "兒童隱私",
          content: "我們的應用程式不適用於13歲以下的兒童。我們不會故意收集兒童的資料。"
        },
        changes: {
          title: "政策變更",
          content: "我們可能會不時更新此隱私政策。我們將透過在此頁面上發布新政策來通知您任何變更。"
        },
        contact: {
          title: "聯絡我們",
          content: "如果您對此隱私政策有任何疑問，請透過以下方式聯絡我們："
        }
      }
    },
    terms: {
      title: "服務條款",
      lastUpdated: "最後更新",
      sections: {
        intro: {
          title: "同意條款",
          content: "透過存取或使用{appName}，您同意受這些服務條款的約束。如果您不同意這些條款的任何部分，您不得使用我們的應用程式。"
        },
        license: {
          title: "授權",
          content: "我們授予您有限的、非獨家的、不可轉讓的授權，以供個人、非商業目的使用{appName}。"
        },
        restrictions: {
          title: "限制",
          content: "您同意不：",
          items: [
            "修改、逆向工程或反編譯應用程式",
            "將應用程式用於任何非法目的",
            "嘗試未經授權存取我們的系統",
            "干擾應用程式的正常運作",
            "移除任何版權或專有權聲明"
          ]
        },
        subscription: {
          title: "訂閱和付款",
          content: "高級功能需要訂閱。訂閱透過App Store或Google Play商店管理，並受其條款和條件約束。",
          items: [
            "訂閱會自動續訂，除非取消",
            "取消必須透過您的應用商店帳戶完成",
            "退款受App Store/Google Play政策約束",
            "價格可能會在通知後變更"
          ]
        },
        content: {
          title: "使用者內容",
          content: "您保留在應用程式中建立的任何內容的所有權。透過使用應用程式，您授予我們使用、儲存和處理您的內容以提供服務的授權。"
        },
        disclaimer: {
          title: "免責聲明",
          content: "應用程式按「現狀」提供，不提供任何形式的保證。我們不保證應用程式將無錯誤或不中斷。"
        },
        limitation: {
          title: "責任限制",
          content: "對於因使用應用程式而產生的任何間接、附帶、特殊或後果性損害，我們概不負責。"
        },
        termination: {
          title: "終止",
          content: "我們保留隨時終止或暫停您對應用程式的存取權限的權利，無需通知，對於我們認為違反這些條款的行為。"
        },
        changes: {
          title: "條款變更",
          content: "我們保留隨時修改這些條款的權利。在變更後繼續使用應用程式即表示接受新條款。"
        },
        governing: {
          title: "管轄法律",
          content: "這些條款應受適用法律管轄和解釋。"
        },
        contact: {
          title: "聯絡我們",
          content: "如果您對這些條款有任何疑問，請透過以下方式聯絡我們："
        }
      }
    },
    support: {
      title: "支援",
      sections: {
        intro: {
          title: "我們能如何協助您？",
          content: "我們在這裡幫助您充分利用{appName}。從以下選項中選擇："
        },
        faq: {
          title: "常見問題",
          items: [
            {
              q: "如何使用計算機？",
              a: "只需點擊菜餚即可將其添加到您的訂單中。應用程式將自動計算總價並追蹤您的支出。"
            },
            {
              q: "什麼是高級功能？",
              a: "高級功能包括無廣告體驗、無限歷史記錄、進階統計和優先支援。"
            },
            {
              q: "如何取消訂閱？",
              a: "前往您裝置的App Store或Google Play商店設定，找到您的訂閱並從那裡取消。"
            },
            {
              q: "我的資料安全嗎？",
              a: "是的，我們非常重視資料安全。所有資料都安全儲存，我們絕不會出售您的個人資訊。"
            },
            {
              q: "可以離線使用應用程式嗎？",
              a: "是的，大多數功能都可以離線使用。當您重新上線時，資料將會同步。"
            }
          ]
        },
        contact: {
          title: "聯絡支援",
          content: "仍需要協助？請聯絡我們：",
          email: "電子郵件",
          response: "我們通常會在24-48小時內回覆。"
        },
        feedback: {
          title: "意見回饋與建議",
          content: "我們喜歡聽取使用者的意見！分享您的想法，幫助我們改進{appName}。"
        }
      }
    },
    common: {
      backToApp: "返回應用程式",
      language: "語言",
      loading: "載入中..."
    }
  }
};
