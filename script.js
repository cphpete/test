<script>
    let drinkCount = 0;
    const counter = document.getElementById('drink-counter');
    
    // Favorite button functionality
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Tried button functionality
    document.querySelectorAll('.tried-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                drinkCount++;
                counter.textContent = `Drinks tried: ${drinkCount}`;
            }
            this.classList.toggle('active');
        });
    });

    // Filter functionality
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelectorAll('.cocktail').forEach(cocktail => {
                if (filter === 'all') {
                    cocktail.style.display = 'block';
                } else if (filter === 'favorites') {
                    cocktail.style.display = 
                        cocktail.querySelector('.favorite-btn').classList.contains('active') 
                        ? 'block' : 'none';
                } else if (filter === 'tried') {
                    cocktail.style.display = 
                        cocktail.querySelector('.tried-btn').classList.contains('active') 
                        ? 'block' : 'none';
                }
            });
        });
    });
</script>
