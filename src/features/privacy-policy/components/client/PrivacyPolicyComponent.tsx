'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';

import { containerVariants, itemVariants } from '@/shared/libs/motion';

export const PrivacyPolicyComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          className="mx-auto mb-16 space-y-20"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Title、Description start */}
          <motion.div
            variants={itemVariants}
            className="mb-16 text-center"
          >
            <h2 className="mb-1 font-semibold text-gray-900 text-xl md:text-3xl">プライバシーポリシー</h2>
            <div className="mx-auto mb-6 h-1 w-52 rounded-full bg-linear-to-r from-blue-600 to-purple-600 md:w-80" />
          </motion.div>
          {/* Title、Description end */}

          {/* Content start */}
          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-4xl space-y-4 text-sm md:space-y-8 md:text-base"
          >
            <div className="space-y-2 md:space-y-4">
              <div className="font-semibold">基本方針</div>
              <div>
                <p>
                  当サイト
                  <Link
                    href="/"
                    className="text-blue-600 underline"
                  >
                    https://yoshi0518.com
                  </Link>
                  （以下、「当サイト」）は、個人情報の重要性を認識し、当サイトで取扱う個人情報について下記の通り対応を行います。
                </p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-4">
              <div className="font-semibold">適用範囲</div>
              <div>
                <p>
                  本プライバシーポリシーは、お客様の個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。
                </p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-4">
              <div className="font-semibold">個人情報の利用目的</div>
              <div>
                <p>当サイトは、お客様からご提供いただく情報を以下の目的の範囲内において利用します。</p>
              </div>
              <div>
                <ul className="list-disc space-y-1 pl-8 md:pl-10">
                  <li>ご本人確認のため</li>
                  <li>お問い合わせ、コメント等の確認・回答のため</li>
                  <li>お客さまの承諾・申込みに基づく、提携事業者・団体等への個人情報の提供のため</li>
                  <li>利用規約等で禁じている行為などの調査のため</li>
                  <li>その他個別に承諾いただいた目的</li>
                </ul>
              </div>
            </div>

            <div className="space-y-2 md:space-y-4">
              <div className="font-semibold">個人情報の管理</div>
              <div>
                <p>
                  当サイトは、個人情報の正確性及び安全確保のために、セキュリティ対策を徹底し、個人情報の漏洩、改ざん、不正アクセスなどの危険については、必要かつ適切なレベルの安全対策を実施します。
                </p>
                <p>
                  当サイトは、第三者に重要な情報を読み取られたり、改ざんされたりすることを防ぐために、SSLによる暗号化を使用しております。
                </p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-4">
              <div className="font-semibold">個人情報の第三者提供</div>
              <div>
                <p>当サイトは、以下を含む正当な理由がある場合を除き、個人情報を第三者に提供することはありません。</p>
              </div>
              <div>
                <ul className="list-disc space-y-1 pl-8 md:pl-10">
                  <li>ご本人の同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>人の生命・身体・財産の保護に必要な場合</li>
                  <li>公衆衛生・児童の健全育成に必要な場合</li>
                  <li>国の機関等の法令の定める事務への協力の場合（税務調査、統計調査等）</li>
                </ul>
              </div>
            </div>

            <div className="space-y-2 md:space-y-4">
              <div className="font-semibold">個人情報に関するお問い合わせ</div>
              <div>
                <p>
                  開示、訂正、利用停止等のお申し出があった場合には、所定の方法に基づき対応致します。具体的な方法については、個別にご案内しますので、お問い合わせください。
                </p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-4">
              <div className="font-semibold">アクセス解析</div>
              <div>
                <p>当サイトでは、サイトの分析と改善のためにGoogleが提供している「GoogleAnalytics」を利用しています。</p>
                <p>
                  このサービスは、トラフィックデータの収集のためにCookie（クッキー）を使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
                </p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-4">
              <div className="font-semibold">プライバシーポリシーの変更</div>
              <div>
                <p>当サイトは、本プライバシーポリシーの内容を適宜見直し、その改善に努めます。</p>
                <p>本プライバシーポリシーは、事前の予告なく変更することがあります。</p>
                <p>本プライバシーポリシーの変更は、当サイトに掲載された時点で有効になるものとします。</p>
              </div>
            </div>
          </motion.div>
          {/* Content end */}
        </motion.div>
      </div>
    </section>
  );
};
