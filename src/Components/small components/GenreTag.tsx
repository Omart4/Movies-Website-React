const styles = {
    span:{
        border: "1px solid rgba(255, 255, 255, 0.511)",
        color: "rgba(255, 255, 255, 0.511)",
        borderRadius: "var(--radiusValue)",
        fontSize: ".7rem",
        margin: "0 6px",
        padding: "0.1rem 0.3rem",
    }
}
export const GenreTag = ({genre}:any) => {
    return(
        <span style={styles.span} className="g-tag">{genre}</span>
    )
}