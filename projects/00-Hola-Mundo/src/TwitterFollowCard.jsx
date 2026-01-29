export function TwitterFollowCard({username,name,isFollowing}){
    return (<article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                alt={`imagem de ${name}`} 
                className='tw-followCard-avatar' 
                src={`https://unavatar.io/${username}`} />  
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-info-name'>{name}</strong>
                    <span className="tw-followCard-info-username">@{username}</span>
                </div>         
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}