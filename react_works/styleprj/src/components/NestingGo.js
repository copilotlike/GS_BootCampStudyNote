import ns from '../styles/nest.module.scss'

function NestingGo(props) {
    return (
        <div>
            <h1>NestingGo 입니다</h1>
            <section>section이지롱
                <div>div 1</div>
            </section>
            <div>div 2</div>
            <div className={ns.aaa}>
                aaa 입니다.
                <span>span 입니다.</span>
                <div className={ns.bbb}>div bbb 입니다.</div>
                <div className={ns.ccc}>div ccc 입니다.</div>
            </div>
            <div className={`${ns.aaa} ${ns.ccc}`}>aaa입니다.</div>
            <div className={`${ns.aaa} ${ns.ddd}`}>ddd입니다.
                <div className={ns.fff}>ddd {'>'} fff 입니다.</div>
            </div>
            <div className={`${ns.eee}`}>eee입니다.</div>
            <div className={`${ns.fff}`}>fff입니다.</div>
            <div className={`${ns.dddggg}`}>dddggg입니다.</div>
        </div>
    );
}

export default NestingGo;